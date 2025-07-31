import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Products} from '../services/product.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {
 
  formInputs!:FormGroup
  title!: string;
  price!: number;
  description!: string;
  category!: string;
  image!:[];
  imagePreview: string | null = null;
  productsLength!:string
  imgFile!: File
  constructor(private product:Products, private http:HttpClient) { }

  ngOnInit(): void {
    this.formInputs=new FormGroup({
        title: new FormControl('',Validators.required),
        price: new FormControl('',Validators.required),
        description: new FormControl('',Validators.required),
        category:new FormControl('',Validators.required),
        image: new FormControl('',Validators.required)
    })
    this.product.fetchProducts().then(() => {
      this.product.product$.subscribe((value)=>{
        this.productsLength="P"+value.length+1;
        console.log("Your Product Id: ",this.productsLength)
      }) 
    });


  }
  onSubmit(){
    this.title=this.formInputs.get('title')?.value
    this.price=this.formInputs.get('price')?.value
    this.description=this.formInputs.get('description')?.value
    this.image=this.formInputs.get('image')?.value
    this.category=this.formInputs.get('category')?.value
    console.log(this.formInputs)
    const formData = new FormData();
    formData.append('image', this.imgFile);
    formData.append('productId', this.productsLength.toString());
    formData.append('title', this.title);
    formData.append('price', this.price.toString());
    formData.append('description', this.description);
    formData.append('category', this.category);

    console.log(this.imgFile,'raw file')
    const entries = (formData as any).entries();
    for (let pair of entries) {
      console.log(`${pair[0]}:`, pair[1]);
    }
    this.http.post<{ message: string; path: string }>('http://localhost:3000/uploads/products', formData).subscribe({
      next: (res) => {
        console.log('Upload success:', res)
        alert(`Product Added Sucessfully with ${res.path}`)
      },
      error: (err) => console.error('Upload error:', err)
    });
  }
  handleingfile(event:Event){
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
     this.imgFile = fileInput.files[0];

    // const reader = new FileReader();
    // reader.onload = () => {
    //   const base64Image = reader.result as string;
    //   this.imagePreview = base64Image;
    //   console.log(this.imagePreview,'base file')
    //   // Store in the form
    //   this.formInputs.patchValue({
    //     image: base64Image
    //   });
    //   this.formInputs.get('image')?.markAsDirty();
    // };
    // reader.readAsDataURL(file);
  }
  }
  handelcategory(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected category:', selectedValue);
  }
}
