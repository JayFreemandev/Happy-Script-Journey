function* fruitList(){
    yield 'Banana';
    yield 'Apple';
    yield 'Pizza';
}

const furits = fruitList();

furits.next();