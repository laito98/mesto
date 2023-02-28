export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_disabled',
  errorClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_type_error'
};

export class FormValidator {
  constructor(formElement, config) {
    this._form = formElement;
    this._inputSelector = config.inputSelector;
    this._disabledButtonClass = config.disabledButtonClass;
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  _setEventListeners = () => {

    this._toggleButtonState();
    this._form.addEventListener('submit', (e)=>{
      e.preventDefault();
    });
    this._inputList = this._form.querySelectorAll(this._inputSelector);

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputSelector, this._buttonElement);
      })
    });
  }


  _showInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`) 
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }


  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`) 
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';

  }


  _checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }


  _toggleButtonState = () =>{
    const isFormValid = this._form._checkInputValidity;
    if (!isFormValid){
      this._buttonElement.classList.add(this._disabledButtonClass);
      this._buttonElement.disabled = true;
      
    } else {
      this._buttonElement.classList.remove(this._disabledButtonClass);
      this._buttonElement.disabled = false;
      console.log(this._buttonElement);
    }

  }

  _enableValidation = () =>{
    this._form.addEventListener('submit', (e)=>{
      e.preventDefault();
    });
    this._setEventListeners();
  }
}







