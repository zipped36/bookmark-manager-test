import { Component, OnInit  } from '@angular/core';
import { category } from './interfaces/category';
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  itemValue!:category
  itemTitle!:string
  itemURL!: string
  itemCategory!: String 
  groupBy = (array:any, property:any) => array.reduce((grouped: { [x: string]: any; }, element: { [x: string]: string ; }) => ({
    ...grouped,
    [element[property]]: [...(grouped[element[property]] || []), element]
  }), {})
  
  localArray: category[]= [
    {
      id: 1,
      title: "Javascript tutorial",
      URL: 'www.javascript.com',
      Category: 'Category A'
    },
    {
      id: 2,
      title: "React tutorial",
      URL: 'www.react.com',
      Category: 'Category A'
    },
    {
      id: 3,
      title: "Angular tutorial",
      URL: 'www.angular.com',
      Category: 'Category A'
    },
    {
      id: 4,
      title: "Typescript tutorial",
      URL: 'www.ts.com',
      Category: 'Category A'
    },
    {
      id: 5,
      title: "Tailwind tutorial",
      URL: 'www.tailwind.com',
      Category: 'Category A'
    },
    {
      id: 6,
      title: "Bootstrap tutorial",
      URL: 'www.bootstrap.com',
      Category: 'Category A'
    },
    {
      id: 7,
      title: "Best food in dhaka",
      URL: 'www.food.com',
      Category: 'Category B'
    },
    {
      id: 8,
      title: "Burger vs Pizza",
      URL: 'www.burger.com',
      Category: 'Category B'
    },{
      id: 9,
      title: "Basic physics",
      URL: 'www.physics.com',
      Category: 'Category C'
    },
    {
      id: 10,
      title: "Astronomy",
      URL: 'www.astro.com',
      Category: 'Category C'
    }
  ]
  Categories = Array.from(new Set(this.localArray.map((item) => item.Category)));

  GroupByCategory = this.groupBy(this.localArray, 'Category')


  buttonText={
    addBookmark : "Add Bookmark",
    details: "Details",
    cancel: "Cancel",
    save: "Save"
  }

  details(item: category){
    this.itemTitle = item.title,
    this.itemURL = item.URL
    this.itemCategory = item.Category
    console.log("parent Item",this.itemValue.title)
  }

  getFormVal(formVal: any){
    console.log("from parent",formVal)
    var bookmarkVal = Object.assign(formVal,{"id":this.localArray.length+1})
    this.localArray.push(bookmarkVal)
    console.log(bookmarkVal)
  }

  ngOnInit(): void {
    console.log(this.GroupByCategory)
  }

}

//reference: https://domhabersack.com/array-group-by
