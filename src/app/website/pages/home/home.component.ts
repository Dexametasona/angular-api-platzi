import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { FilesService } from 'src/app/services/files.service';
import { SigInService } from 'src/app/services/sig-in.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  constructor(
    private data: DataService,
    private auth: AuthService,
    private signIn: SigInService,
    private file:FilesService,
    private route:ActivatedRoute
  ) {}
  products: Product[] = [];
  prodId = '';
  productDetail: Product = {
    category: {
      id: '',
      name: '',
    },
    description: '',
    id: '',
    images: [],
    price: 0,
    title: '',
  };

  stateShowDetail = false;
  listImages = [
    'https://placeimg.com/640/480/animals',
    'https://placeimg.com/640/480/arch',
    'https://placeimg.com/640/480/nature',
    'https://i.blogs.es/8ae863/22-10-12546-2/1366_2000.jpg',
  ];
  offset = 0;

  showDetail(id: string) {
    this.stateShowDetail = !this.stateShowDetail;
    this.prodId = id;
    if (id !== '') {
      this.data.getDataDetail(id).subscribe((data) => {
        this.productDetail = data;
      });
    }
  }

  handleError() {
    this.data.getDataDetail('12121221').subscribe({
      next: (data) => {
        this.productDetail = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  create() {
    const prod = {
      categoryId: 2,
      description: 'comunismo',
      images: [
        'https://www.gazeta.gt/wp-content/uploads/2021/11/Fantasma-comunismo.jpg',
      ],
      price: 500,
      title: 'ghost communism',
    };
    this.data.createProduct(prod).subscribe((data) => {
      this.products.unshift(data);
    });
  }

  update(id: string) {
    const newTitle = {
      title: 'nuevo titulo',
    };
    this.data.updateProduct(id, newTitle).subscribe((data) => {
      const prodIndex = this.products.findIndex((item) => item.id === id);
      this.products[prodIndex] = data;
    });
  }

  delete() {
    this.data.deleteProduct(this.prodId).subscribe(() => {
      const prodIndex = this.products.findIndex(
        (item) => item.id === this.prodId
      );
      this.products.splice(prodIndex, 1);
    });
    this.stateShowDetail = false;
  }
  moreData() {
    this.offset += 10;
    this.data.getDataForPage(10, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    this.data.getDataForPage(10, 0).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

    this.route.queryParams.subscribe(data=>console.log(data))
  }

  createUser() {
    const user = {
      email: 'consome@gmail.com',
      name: 'consome panchi',
      password: '123456',
    };
    return this.auth.createUser(user).subscribe((data) => {
      console.log(data);
    });
  }
  login() {
    return this.auth.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
  token_id!: string;



  loginUser() {

    const user = {
      email: 'consome@gmail.com',
      password: '123456',
    };
    this.signIn
      .logIn(user)
      .pipe(
        switchMap(() => this.signIn.token()))
      .subscribe((user) => console.log(user));
  }

  download(){
    this.file.getFile("comunismo.pdf","https://young-sands-07814.herokuapp.com/api/files/dummy.pdf","application/pdf").subscribe()
  }
  imgRta!:string
  onUpload(event:Event){
    const element=event.target as HTMLInputElement;
    const file=element.files?.item(0);
    if (file){
      this.file.uploadFile(file).subscribe(rta=> this.imgRta=rta.location)
    }
  }
}
