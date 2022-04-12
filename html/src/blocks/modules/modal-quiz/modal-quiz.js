import axios from 'axios';

export default class ModalQuiz {
    constructor() {
        this.isShowModal = false;
        this.questionHeight = 0;
        this.stepId = null;
        this.requestUri = document.querySelector('.modal-quiz').dataset.requestUri;
    }

    init() {
        if (!document.querySelector('.modal-quiz__steps')) return;
        document.querySelector('.modal-quiz__steps').style.height = `${document.querySelector('.modal-quiz__step.isActive').offsetHeight}px`;
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
    async getStep() {
        let newStep = await axios.get(this.requestUri);
        console.log(newStep, document.querySelector(`[data-step_id="${newStep.data[0].previousId}"]`));
        document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
        document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`).classList.add(`isActive`);
        this.setQuestionHeight(document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`));
    }
}