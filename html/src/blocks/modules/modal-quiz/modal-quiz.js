import axios from 'axios';
import serialize from 'form-serialize';
let nextId = null;
let prevId = null;

let setQuestionHeight =  function(item) {
    console.log(item);
    document.querySelector('.modal-quiz__steps').style.height = `${item.offsetHeight}px`;
}

export default class ModalQuiz {
    constructor() {
        this.isShowModal = false;
        this.questionHeight = 0;
        this.stepId = null;
        this.requestUri = document.querySelector('.modal-quiz') ? document.querySelector('.modal-quiz').dataset.requestUri : null;
        this.prevId = null;
        this.history = [];
        this.isFinish = false;
    }

    init() {
        if (!document.querySelector('.modal-quiz__steps')) return;
        this.stepId = document.querySelector('.modal-quiz__step.isActive') ? document.querySelector('.modal-quiz__step.isActive').dataset.step_id : null;
        setTimeout(() => {
            document.querySelector('.modal-quiz__steps').style.height = `${document.querySelector('.modal-quiz__step.isActive').offsetHeight + 5}px`;
        }, 500); 
        // console.log('this.stepId', document.querySelector('.modal-quiz__step.isActive').offsetHeight+'px')
        document.querySelector('.quiz_final_form').addEventListener('submit', (event) => {
            event.preventDefault();
            if (!document.querySelectorAll('form.modal-quiz__step')) return;

            // var form_data = new FormData();
            var form_data = [];
            document.querySelectorAll('form.modal-quiz__step.isActive').forEach(item => {
                // console.log(serialize(item));
                form_data.push(serialize(item));
                console.log('form_data', form_data);
            })
            if (form_data) {
                let data = new FormData();
                data.append('data', JSON.stringify(form_data));
                axios.post(this.requestUri, data).then(response => {
                    console.log('response', response, data);
                    const title = document.querySelector('.modal-quiz__title');
                    title.remove();
                    setQuestionHeight(document.querySelector(`[data-step_id="12341234"]`));
                    document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
                    document.querySelector(`[data-step_id="12341234"]`).classList.add(`isActive`);
                }).catch(error => {
                    console.log(error);
                    this.hiddenModalQuiz();
                });
            } else {
                alert('Заполните поля');
            }
            
        })
    }

    showModalQuiz() {
        this.isShowModal = true;
        document.querySelector('body').style.overflow = 'hidden';
    }

    hiddenModalQuiz() {
        this.isShowModal = false;
        document.querySelector('body').style.overflow = 'auto';
    }
    
    getStep(button) {
        // console.log(document.querySelector(`[data-step_id="${this.stepId}"]`));
        // let data = {
        //     currentStep: this.stepId,
        //     value: document.querySelector(`[data-step_id="${this.stepId}"]`) ? serialize(document.querySelector(`[data-step_id="${this.stepId}"]`)) : null
        // }
        // var form_data = new FormData();
        // form_data.append("data", JSON.stringify(data) );
        // if (data.value) {
        //     axios.post(this.requestUri, form_data).then(response => {
        //         console.log('response', response, data, form_data);
        //         document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
        //         document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`).classList.add(`isActive`);
        //         this.setQuestionHeight(document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`));
        //     }).catch(error => {
        //         this.hiddenModalQuiz();
        //     });
        // } else {
        //     alert('Заполните поля');
        // }
        console.log(button);
        
        if (button === 'next') {
            if (this.stepId !== 43214321 && document.querySelector(`.modal-quiz__step.isActive:not(.isSlided) input[type="radio"]`)) {
                if (document.querySelector(`.modal-quiz__step.isActive:not(.isSlided) input[type="radio"]:checked`)) {
                    this.history = [...this.history, this.stepId];
                    this.stepId = document.querySelector(`.modal-quiz__step.isActive:not(.isSlided) input[type="radio"]:checked`).value;
                    // if (!document.querySelector(`[data-step_id="${this.stepId}"]`)) {
                    //     this.stepId = 43;
                    // } else {
                    // }
                    if (!document.querySelector(`[data-step_id="${this.stepId}"]`)) {
                        this.stepId = 43214321;
                        console.log('is 43214321')
                    }
                    document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
                    document.querySelector(`[data-step_id="${this.stepId}"]`).classList.add(`isActive`);
                } else {
                    alert('Простите, но Вы должны что то выбрать.')
                }
            } else {

                // const title = document.querySelector('.modal-quiz__title');
                const buttons = document.querySelector('.modal-quiz__buttons');
                console.log('last screen');
                document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
                document.querySelector(`[data-step_id="43214321"]`).classList.add(`isActive`);
                // this.stepId = 12341234;
                // title.remove();
                buttons.remove();
            }
        } else {
            if (this.history.length) {
                console.log('back', this.stepId, this.history[this.history.length - 1]);
                document.querySelector(`[data-step_id="${this.stepId}"]`).classList.remove(`isActive`);
                document.querySelector(`[data-step_id="${this.history[this.history.length - 1]}"]`).classList.remove(`isSlided`)
                // document.querySelector(`[data-step_id="${this.history[this.history.length - 1]}"]`).classList.add('isActive');
                this.stepId = this.history[this.history.length - 1];
                this.history.pop();
            } else {
                alert('Вы еще ничего не выбрали');
            }
        }
        setTimeout(() => {
            console.log(`height ${document.querySelector('.modal-quiz__step.isActive').offsetHeight + 5}px`, document.querySelector('.modal-quiz__step.isActive:not(.isSlided)'));
            document.querySelector('.modal-quiz__steps').style.height = `${document.querySelector('.modal-quiz__step.isActive:not(.isSlided)').offsetHeight + 5}px`;
        }, 500);
    }
}