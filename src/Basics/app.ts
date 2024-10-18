//Basic types
//Primitive types (number,string,boolean)
//- Arrays
//- Tuples
//- Enums
//- Any, Unknown, Void, Null, Undefined, Never

//Array
let arr1:number[] =[1,23,4,4,4] 

//Tuple,isme bta skte hai ki sirf yhi do elements rhenge
let tuple : [number,string]=[1,"shivam"]

//Enumerations,object with special powers,used for status codes
enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN="super_admin"
}

UserRoles.ADMIN

//Phle se type assign kr skte hai
let a:number;

//ANY,isme aage kuch bhi assign kr skte hai,aur ye hme avoid krna hai
let b : any;//TYPESCRIPT OFF
b=23
b="shivam"
b.toLowerCase()

//UNKNOWN
let c : unknown;
c=23
c="shivam"
//it gives error
// c.toLowerCase()//diff b/w any and unknown is ki any ka matlb typscript off aur unknown me type check krna pdega tbhi kam kr payenge,its called type narrowing
//like this
if(typeof c == "string"){
    c.toLowerCase()
}

//VOID,agr function kuch bhi return nhi kr rha to void batana pdega
// aisi hi function number ,string jo bhi return krega batana pdega
function abcd():void{
    console.log(a)
}

//NULL,jb koi koi chij sochte hai aur nhi milti to use null bolte hai
let d : null
// aage aise use krenge
let e : null | string

//UNDEFINED,agr kisi variable ko value nhi doge to undefined hoga
let p:undefined;


//NEVER,vha use krte hai jb kbhi return nhi krna hota
function cde():never {
    while(true){

    }
}
// cde() //aage ka code nhi chlne dega
console.log("yeh");


//TYPE INFERENCE
//jab variable to aap na btaye ki type kya hai,aur value ko dekh kr varibale khud pta krle ki uska type kya hai ,this is called inference(ts apne aap  se sochta hai)
let s = "hi"

//TYPE ANNOTATIONS, number | string | boolean--->this is annotations
let t : number | string | boolean
function gfg(a:number,b:string){ }


//INTERFACES AND TYPE ALIASES
//example
function f(a:string){
    a.toLowerCase() //yha a. krte hi uski properties aagyi pr object ke sath aisa nhi hoga ,usi ko krne k liye hum interfaces ka use krte hai
}

//Interface,obj ka interface aisa dikhta hai
interface User{
    _name:string,
    email:string,
    password:string
    gender?:string //optional,dediya to theek nhi diya to bhi theek 
}

// const obj ={
//     name:"shivam",
//     email:"abc@gmail.com",
//     password:"abcdb"
// }

//yha ts janti hai ki jb is function ko jb call lgayi jayegi to vo object dega
function yoo(obj:User){ //ek tarike se yha ka jo object hai vo user jaisa hona chahiye
    
}
yoo({_name:"shivam",email:"abc",password:"12333"})//javascript me agr object pass nhi krenge to vo chal jayega

//-EXTENDED INTERFACE
interface Admin extends User{ //jo jo User interface ke pass hai vo iske pass bhi hoga + admin bhi hoga
    admin:boolean
}
function yoyo(obj:Admin){
    obj.gender
}

//ANOTHER EXAMPLE,two interfaces with the same name can be merged and can be accessed
interface Customer{
    name:string
}

interface Customer{
    address:string
}

function yoso(obj:Customer){
    obj.address
}

//- TYPE ALIASES
type sankhya=number;
let z:sankhya,

type arg=number | string | boolean

function fgh(val:arg){

}
fgh(true)

// UNION  AND INTERSECTION TYPES

//union(OR)
let w:string | null;//(| this is union)

//intersection(AND)

type Insan = {
    name:string
}

type Admi= Insan & { //use of intersection
    getUsers(user:string):void;
}

function xyz(obj:Admi){
    
}

//DIFF B/W TYPE AND INTERFACE 
// this will not work,main diff it cannot be merged
// type abcd;
// type abcd;

//

//CLASSES AND OBJECTS
// ek aisi machine jo produce kr rhi hai final consumable product,the machine is called constructor
// constructor --> human maker

class BottleMaker{
    // material="plastic"
    constructor(public name:string,public price?:number, public material:string="plastic"){//Its is callled parameter properties
        this.name=name;
    }

    changing(){
        this.name="shivam"
    }
}
// let b1=new BottleMaker("bottle",1000)

//another method
class Music{
    public name;
    public artist;
    public length;
    public free
    constructor( name:string, artist:string, length:number, free:boolean,public thumbnail:string="by default" ){
        this.name=name;
        this.artist=artist;
        this.length=length;
        this.free=free
    }
}

let m1=new Music("Tere bin","Shivam",5,false)

//ACCESS MODIFIERS -->PUBLIC,PRIVATE,PROTECTED
//We can understand with Bottlemaker class

//PUBLIC-->khi pr bhi change krenge to ho jayega
// b1.name="bottle2"

//PRIVATE->sirf usi class ke ander hi access kr skte aur changes kr skte hai jis class me bna hai,class ke bahar nhi ho payega kuch bhi
// b1.changing();

//PROTECTED-->ek to jo classs hai access kr skti hai plus jo class use  extend kr rhi hai vo bhi kr skti hai


//INHERITANCE
class MetalBottleMaker extends BottleMaker{
    constructor(name:string){
        super(name);//sari properties leni vha se hta ke chlega
    }
    getvalue(){
        console.log(this.name)
    }
}
let b2=new MetalBottleMaker("chilton")
b2.getvalue();

//OPTIONAL PROPERTIES
//---readonly ->change nhi krna to ye use krenge
//---? -> agr koi field optional deni hai to ye use krenge

class User{
    constructor(public readonly name:string){ //agar name ki value change nhi krni ek bar dalne ke bad to readonly lga skte hai
        
    }
    changeName(){
        this.name="asish"
    }
}

let u1 = new User("vikram");

u1.changeName()

//GETTERS AND SETTERS

class usr{
    constructor(public _name:string,public age:number){

    }

    get name(){
        return this._name;
    }
    set name(value :string){
        this._name=value
    }
}

let p1=new usr("Shivam",20)


//STATIC MEMBERS -- > basically we can use class without making instance
class shevy{
    static version=1;
    static getRandom(){
        return Math.random()
    }
}

// ABSTRACT(jiske ander kuch meanning chupa hota hai) CLASSES

class CookingEssentials{ //is class se instance nhi banana hai,kyoki ye sirf base properties hai 
    constructor(protected gas:number,protected company:number){}
}

class sabji extends CookingEssentials{ //this meeans when we make sabzi we need cooking essenials

}

//FUNCTIONS
function printHello():void{
    console.log("hello")
}

//another example
function abcdef(name:string,age:number,cb:(arg:string)=>void){
    cb("yelloe")
}

abcdef("Shivam",34,(arg:string)=>{
    console.log("me hoo callback");
})

//OPTIONAL AND DEFAULT PARAMETERS
function we23(name:string,age?:number,gender:string="not to be disclosed"){
    console.log(name,age,gender);
}

we23('shivam',34,"male")

//REST PARAMETERS
//Function ke parameter may agar ... lagaya to aap vaha par sari di Gaye arguments ko ek Hi variable may has an array rakh rhe ho
function sum(...arg:number[]){
    console.log(arg)
}
sum(1,2,3,4,5,5,3,5,7)

//SPREAD
//jb array or objects ki value ko copy krna chahte ho to spread use hota
let arrr = [1,2,3,4,5]
let arrr2=[...arrr]

//FUNCTION OVERLOADING 
function abdb(a:string):void;
function abdb(a:string,b:number):number;

function abdb(a:any,b?:any){
    if(typeof a==="string" &&  b===undefined){
        console.log("first")
    }
    if(typeof a==="string" && typeof b==="number"){
        console.log("second")
    }
    else throw new Error("something is wrong")
}

abdb("hii",554)


//GENERICS

//hame ek function banana hai jo accept krega koi bhi value aur use print krega

//hum ek function ko use karte wagt bta sakte hai ki function argument ko kis type se treat karega 

function log<T>(a:T){
    console.log( typeof a)
}

//Generic Functions
log<string>("Shivam") //ham likh bhi skte hai type 
log(11212)//ts apne aap infer kr lega

//Generic Interface(object ka roop)

interface Halua<T>{
    name:string;
    age:number;
    key:T
}

function ansd(obj:Halua<string>){
    obj.key.length
}

ansd({name:"fudi",age:34,key:"swddee"})

//Generic Classes
class cakeMaker<T>{
    constructor(public key:T){}
}

let c1=new cakeMaker<string>("shivam")
let c2=new cakeMaker(1313323)

//there is  a catch in a generics
//"hello" for ts its not a string but it is string literal,thats why it gives error
function txj<T>(a:T,b:T):T{
    //to work a intellisense,we have to perforn type narrowing
    if(typeof a==="string"){
    
    }
    return <T>"hello";
}

txj<string>("hie","bei")

//TYPE ASSERTIONS
// type assertion ka matlb batana ts ko ki particuler cheej ka type kya hai,ye ham tab krte hai jab hm ts se jyada us value ka type jante hai

let r:any="sndff";
(<number>r)//this is type assertion

//Typecasting
let y= Number("wdwef")
console.log(typeof y)

//NON-NULL ASSERTION OPERATOR
let o:null | string | undefined ;
o= "hey"
o!.length //not lagane se ye value null ya undefined nhi hogi for sure

//TYPE GUARDS(using typeof) --> type narrowing(it is used when u are not sure about type and we can use if else and typeof operator)
function oab(arg:string|number| any){
    if (typeof arg === "number") {
        return "number"
    }
    else if (typeof arg === "string") {
        return "string"
    }
    else{
        throw new Error("pagal hoke")
    }
}

console.log(oab("strinnnnnnnnnng"))
console.log(oab(3232))
console.log(oab(true))

//TYPE GUARDS(using instanceof)
class TvRemote{
    switchTV(){
        console.log("switching off the tv")
    }
}
class CarRemote{
    switchCar(){
        console.log("switching off the car")
    }
}

let tv = new TvRemote();
let car = new CarRemote

function switchOff(device:TvRemote | CarRemote){
    if(device instanceof TvRemote){
        device.switchTV()
    }
    else if(device instanceof CarRemote){
        device.switchCar()
    }
}

switchOff(tv)

