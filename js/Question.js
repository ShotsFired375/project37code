class Question {
    constructor() {
        this.nameIN = createInput("Name");
        this.choiceIN = createInput("Choice Number");
        this.title = createElement('h1');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }
  
    hide() {
        this.nameIN.hide();
        this.choiceIN.hide();
        this.title.hide();
    }
  
    display(){
        this.title.html("MyQuiz Game");
        title.position(350, 0);

        this.question.html("Question exampleeee");
        this.question.position(150, 80);

        this.option1.html("Option 1");
        this.option1.position(150, 80);
        this.option2.html("Option 2");
        this.option2.position(150, 100);
        this.option3.html("Option 3");
        this.option3.position(150, 120);
        this.option4.html("Option 4");
        this.option4.position(150, 140);
      
        this.nameIN.position(150, 300);
        this.choiceIN.position(350, 300);
  
       
    }

}