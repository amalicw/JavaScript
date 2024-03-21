class Employee{

    setDetails(name,id,pNo){

        this.name = name;
        this.id = id;
        this.pNo = pNo;
    }

    getName(){
        return this.name
    }

    getID(){
        return this.id
    }

    getpNo(){
        return this.pNo
    }
}

let emp1 = new Employee();

emp1.setDetails('Amali',1,'0775556789');
console.log(emp1.getName());
console.log(emp1.getID());
console.log(emp1.getpNo());




