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
//  showDetails.apply(s3,[10,20]);

const student1={
    name:'Anu',
    institute:'Eonix',
    showDetails:function(){
        console.log(this.name+" studies at "+this.institute)
    }
};
const student2={
    name:'Rahul',
    institute:'Eonix',
     };
     student1.showDetails.apply(student2)