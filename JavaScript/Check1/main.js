/*
問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
*/

let numbers = [2, 5, 12, 13, 15, 18, 22];

//ここに答えを実装してください。↓↓↓
function isEven() {
    for(num = 0; num <= numbers.length; num++){
        if(numbers[num] % 2 === 0){
            console.log(numbers[num] + 'は偶数です')
        }
    }
}

isEven();



/*
問2:以下の要件を満たすように実装してください。

【要件】

・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
*/

class Car{

    constructor(gasoline, number){

        this.gasoline = gasoline;
        this.number = number;

    }

    getNumGas(){
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.number}です`);  
    }

}

let CarRed = new Car(200, 1234);
CarRed.getNumGas();