export default class ModalQuiz {
    constructor() {
        this.isShowModal = false;
        this.arrayBtnFirstQuestion = [
            {
                id: 1,
                title: 'Продать'
            },
            {
                id: 2,
                title: 'Сдать'
            },
            {
                id: 3,
                title: 'Арендовать'
            }
        ];
        this.answerFirstQuestion = '';
        this.arrayBtnSecondQuestion = [
            {
                id: 1,
                title: 'Офис'
            },
            {
                id: 2,
                title: 'Торговая площадка'
            },
            {
                id: 3,
                title: 'Готовый бизнес'
            },
            {
                id: 4,
                title: 'Склад'
            },
        ];
        this.answerSecondQuestion = '';
        this.arrayBtnThirdQuestion = [
            {
                id: 1,
                title: 'В москве'
            },
            {
                id: 2,
                title: 'В санкт-петербурге'
            },
            {
                id: 3,
                title: 'В другой стране'
            },
        ];
        this.answerThirdQuestion = '';
        this.fourthForm = {
            option1: [
                {
                    id: 1,
                    type: 'text',
                    placeholder: 'Район',
                    value: ''
                },
                {
                    id: 2,
                    type: 'text',
                    placeholder: 'Метро',
                    value: ''
                },
                {
                    id: 3,
                    type: 'text',
                    placeholder: 'Адрес',
                    value: ''
                },
            ],
            option2: [
                {
                    id: 1,
                    type: 'text',
                    placeholder: 'Укажите страну',
                    value: ''
                },
                {
                    id: 2,
                    type: 'text',
                    placeholder: 'Укажите регин',
                    value: ''
                },
            ]
        },
        this.fifthForm = [
            {
                id: 1,
                type: 'text',
                placeholder: 'Площадь в м²',
                value: ''
            },
        ]
        this.sixthForm = [
            {
                id: 1,
                type: 'text',
                placeholder: 'Цена в рублях',
                value: ''
            },
        ]
        this.seventhForm = [
            {
                id: 1,
                type: 'text',
                placeholder: 'Ваш имя',
                value: ''
            },
            {
                id: 2,
                type: 'tel',
                placeholder: 'Телефон',
                value: ''
            },
        ];
        this.seventhCheckbox = '';
        this.currentQuestion = 1;
        this.allQuestions = 8;
    }

    init() {
    }

    showModalQuiz() {
        this.isShowModal = true;
        document.querySelector('body').style.overflow = 'hidden';
    }

    hiddenModalQuiz() {
        this.isShowModal = false;
        document.querySelector('body').style.overflow = 'auto';
    }

    setProgress() {
        return (this.currentQuestion * 100 / this.allQuestions) + '%';
    }

    disabledNextBtn() {
        let findEmptyField;

        switch (this.currentQuestion) {
            case 1:
                return this.answerFirstQuestion ? false : true;
            case 2:
                return this.answerSecondQuestion ? false : true;
            case 3:
                return this.answerThirdQuestion ? false : true;
            case 4:
                if (this.answerThirdQuestion !== 3) {
                    findEmptyField = this.fourthForm.option1.find(field => field.value.trim() === '');
                    return findEmptyField ? true : false;
                } else {
                    findEmptyField = this.fourthForm.option2.find(field => field.value.trim() === '');
                    return findEmptyField ? true : false;
                };
            case 5: 
                findEmptyField = this.fifthForm.find(field => field.value.trim() === '');
                return findEmptyField ? true : false;
            case 6: 
                findEmptyField = this.sixthForm.find(field => field.value.trim() === '');
                return findEmptyField ? true : false;
            case 7: 
                findEmptyField = this.seventhForm.find(field => field.value.trim() === '');
                console.log(this.seventhCheckbox);
                return findEmptyField || this.seventhCheckbox !== true ? true : false;
        }
    }

    nextQuestion() {
        this.currentQuestion++;
    }

    prevQuestion() {
        this.currentQuestion--;
    }

    declinationForTheThirdStep() {
        let declinationAction;
        
        switch (this.answerFirstQuestion) {
            case 1:
                declinationAction = 'продажу ';
                break;
            case 2:
                declinationAction = 'сдать ';
                break;
            case 3:
                declinationAction = 'аренду ';
                break;
        }

        switch (this.answerSecondQuestion) {
            case 1:
                return declinationAction + (this.answerFirstQuestion === 2 ? 'офис' : 'офиса');
            case 2:
                return declinationAction + (this.answerFirstQuestion === 2 ? 'торговую площадку' :'торговой площадки');
            case 3:
                return declinationAction + (this.answerFirstQuestion === 2 ? 'готовый бизнес' : 'готового бизнеса');
            case 4:
                return declinationAction + (this.answerFirstQuestion === 2 ? 'склад' :  'склада');
        }
    }

    declinationForTheFourthStep() {
        switch (this.answerSecondQuestion) {
            case 1:
                return 'расположен офис';
            case 2:
                return 'расположена торговая площадка';
            case 3:
                return 'расположен готовый бизнес';
            case 4:
                return 'расположен склад';
        }
    }

    filterFourthForm() {
        return this.answerThirdQuestion !== 3 ? this.fourthForm.option1 : this.fourthForm.option2
    }

    declinationForTheFifthStepAndSixthStep() {
        switch (this.answerSecondQuestion) {
            case 1:
                return 'вашего офиса';
            case 2:
                return 'вашей торговой площадки';
            case 3:
                return 'вашего готового бизнеса';
            case 4:
                return 'вашего склада';
        }
    }
}