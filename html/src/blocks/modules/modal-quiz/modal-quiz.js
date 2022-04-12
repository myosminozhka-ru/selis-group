import axios from 'axios';
import serialize from 'form-serialize';

export default class ModalQuiz {
    constructor() {
        this.isShowModal = true;
        this.questionHeight = 0;
        this.stepId = null;
        this.requestUri = document.querySelector('.modal-quiz') ? document.querySelector('.modal-quiz').dataset.requestUri : null;
    }

    init() {
        if (!document.querySelector('.modal-quiz__steps')) return;
        this.stepId = document.querySelector('.modal-quiz__step.isActive') ? document.querySelector('.modal-quiz__step.isActive').dataset.step_id : null;
        document.querySelector('.modal-quiz__steps').style.height = `${+document.querySelector('.modal-quiz__step.isActive').offsetHeight + 5}px`;
        console.log('this.stepId', this.stepId)
    }

    showModalQuiz() {
        this.isShowModal = true;
        document.querySelector('body').style.overflow = 'hidden';
    }

    hiddenModalQuiz() {
        this.isShowModal = false;
        document.querySelector('body').style.overflow = 'auto';
    }
    setQuestionHeight(item) {
        console.log(item);
        this.questionHeight = item.offsetHeight;
        document.querySelector('.modal-quiz__steps').style.height = `${this.questionHeight}px`;
    }
    getStep() {
        console.log(document.querySelector(`[data-step_id="${this.stepId}"]`));
        axios.post(this.requestUri, {
            currentStep: this.stepId,
            value: serialize(document.querySelector(`[data-step_id="${this.stepId}"]`))
        }).then(response => {
            console.log('response', response);
            document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
            document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`).classList.add(`isActive`);
            this.setQuestionHeight(document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`));
        }).catch(error => {
            this.hiddenModalQuiz();
        });
    }
}