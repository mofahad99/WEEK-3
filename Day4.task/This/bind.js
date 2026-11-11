// doest not call immiedtly 
// returns a new function
// that new function has this permenently fixed
// example

// function showDetails(a,b){
//     console.log(this)
//         console.log(this.name+ " studies at "+this.institute,a,b);
//     }

// function student(name){
//     this.name=name,
//     this.institute='Eonix'
    
// }
// const s1=new student('Anu')
// const s2=new student('Rahul')
// const s3=new student('Ayisha')
//  let fn=showDetails.bind(s1,10,20);
//  fn()