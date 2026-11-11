// const student1={
//     name:"Anu",
//     institute:"Eonix",
//     showDetails:function(){
//         console.log(this.name+" studies at "+ this.institute);
//     }
// };
// const student2={
//     name:"Rahul",
//     institute:"Eonix",
//     showDetails:function(){
//         console.log(this.name+" studies at "+ this.institute);
//     }
// };
// student1.showDetails()
// student2.showDetails()

// function student(name){
//     this.name=name,
//     this.institute='Eonix'
//     this.showDetails=function(){
//         console.log(this.name+ " studies at "+this.institute);
//     }
// }
// const s1=new student('Anu')
// const s2=new student('Rahul')
// const s3=new student('Ayisha')

// s1.showDetails();
// s2.showDetails();
// s3.showDetails();

// function student(name){
//     this.name=name,
//     this.institute='Eonix'
//     this.showDetails=function(){
//         console.log(this.name+ " studies at "+this.institute);
//     }
// }
// const s1=new student('Anu')
// const s2=new student('Rahul')
// const s3=new student('Ayisha')

// s1.showDetails();
// s2.showDetails();
// s3.showDetails();
// console.log(s1,s2,s3)

// function showDetails(){
//         console.log(this.name+ " studies at "+this.institute);
//     }

// function student(name){
//     this.name=name,
//     this.institute='Eonix'
    
// }
// const s1=new student('Anu')
// const s2=new student('Rahul')
// const s3=new student('Ayisha')
//  showDetails();

// function showDetails(){
//     console.log(this)
//         console.log(this.name+ " studies at "+this.institute);
//     }

// function student(name){
//     this.name=name,
//     this.institute='Eonix'
    
// }
// const s1=new student('Anu')
// const s2=new student('Rahul')
// const s3=new student('Ayisha')
//  showDetails.call(s3);

function showDetails(a,b){
    console.log(this)
        console.log(this.name+ " studies at "+this.institute,a,b);
    }

function student(name){
    this.name=name,
    this.institute='Eonix'
    
}
const s1=new student('Anu')
const s2=new student('Rahul')
const s3=new student('Ayisha')
 showDetails.call(s3,10,20);