const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 123231312
const float: number = 4.4
const num: number = 3e5
const str: string = 'hello TS'
const numberArray: number[] = [1,4,5,6,7]
const numberarray2: Array<number> = [123.213,31231,23,312]
const words: string[] = ['hello', 'hi']

// tuple
const contact: [string,number] = ['nikita', 12345]

//any
let any: any = 342
any = '123'

const say = (name: any):void => {
    console.log(name)
}
say('nikita')
// Never
function  trowwError(mes:string):never {
    throw  new Error(mes)
}
//если будет 100% ошибка
function infinite(): never {
    while (true) {

    }
}
//type
type Login = string
const login:Login = 'admin'

type ID = string | number
const id1:ID = 1231
const id2:ID = '123123'

// NULL Undefined
type SomeType = string | null | undefined

//interface
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id: '12332',
    size: {
        width: 123,
        height: 13
    }
}
const rect3 = {} as Rect

// extends interface
interface RectWithArea extends Rect {
    getArea: () => number
}
const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 39
    },
    getArea(): number {
      return this.size.width
    }
}

interface IClock {
    time: Date
    setTime(date: Date):void
}
class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '2px'
}
// enum

enum Member {
    Simple,
    Starndart = '1000' ,
    Premium = '2222'
}
const membership = Member.Starndart
console.log(membership)
//functions
function add(a:number, b:number):number {
    return a + b
}
function toUpperCase(str:string):string {
    return str.trim().toUpperCase()
}
interface Position {
    x: number | undefined
    y: number | undefined
}
interface myPosD extends Position {

}
function position(): Position
function position(a:number): myPosD

function position(a?: number, b?:number) {
    if(!a && !b) {
        return {x: undefined, y: undefined}
    }
    if(a && !b) {
        return {x: a, y: undefined}
    }
}
//классы
class TypeSript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `[${name}]: ts`
    }
}
class Car {
    readonly  numberOf: number = 12
    theModel:number
    constructor(readonly model: string) {
    this.model = this.theModel
    }
}
class Animal {
    protected voice: string = ''
    public color: string = 'vaga'
    private go() {
        console.log('go')
    }
}
class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}
abstract class Component {
    abstract render():void
    abstract info():string
}
class Com extends Component {
    render():void {
        console.log('13123')
    }
    info(): string {
        return "";
    }
}
//guards
function strip(x: string | number) {
    if(typeof x === 'number' ) {
        return x.toFixed(2)
    }
    return x.trim()
}
class Myresponse {
    header = 'reseresere'
    result = 'result'
}
class MyError {
    header = 'message'
    message = 'error'
}
function handle(res: Myresponse | MyError) {
    if(res instanceof Myresponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return  {
            info: res.header + res.message
        }
    }
}
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}
setAlertType('success')
//generic

const arrayOfNumbers: Array<number> = [1.3,4,4]
function reverse<T>(array: T[]):T[] {
    return array.reverse()
}
// T любой тип т.е он будет подстраиваться под тип
// oparators
interface Person {
    name: string
    age: number
}
type PersonKeys = keyof Person // name | age
const Mname: PersonKeys = 'name'
type User = {
    _id: number
    name: string
    email: string
    createAD: Date
}
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createAD'>
type UserKeysNometa = Pick<User,'name' | 'email'>