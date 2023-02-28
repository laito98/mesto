const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_disabled',
  errorClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_type_error'
};


function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid)
}

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.disabledButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.disabledButtonClass);
    buttonElement.disabled = false;
  }
}

function resetError(formElement, config){
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach(inputElement => hideInputError(formElement, inputElement, config));
  toggleButtonState(formElement, inputList, config);
}


function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  })
}



function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  })
}


enableValidation(validationConfig);

//содержание карточки
function generateCard(dataCard) {
  const newCard = cardTemplate.content.cloneNode(true);
  const newTitle = newCard.querySelector(`.element__title`);
  const newImage = newCard.querySelector(`.element__image`);
  newTitle.textContent = dataCard.name;
  newImage.alt = dataCard.name;
  newImage.src = dataCard.link;
  const cardLikeButton = newCard.querySelector('.element__like-button');
  cardLikeButton.addEventListener('click', e => { e.target.classList.toggle(`element__like-button_is-activated`) });
  const cardDeleteButton = newCard.querySelector(`.element__delete-button`);
  cardDeleteButton.addEventListener('click', e => { e.target.closest('.element').remove() });
  newImage.addEventListener('click', e => {
    {
      openPopup(bigImagePopup);
      bigImage.src = dataCard.link;
      bigImage.alt = dataCard.name;
      bigImageTitle.textContent = dataCard.name;
    }
  });
  return newCard;
}