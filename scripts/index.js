import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./FormValidator.js";


//общие штуки
const popupList = Array.from(document.querySelectorAll('.popup'));
// объявления для формы 1
const popupOpenButtonElement = document.querySelector(`.profile__edit-button`);
//const popup = document.querySelector(`.popup_form`);
const popupProfile = document.querySelector(`.popup_profile`);
const popupProfileFormElement = document.querySelector(`.popup__container_form_profile`);
const popupProfileForm = document.querySelector(`.popup__form_profile`);
const popupProfileCloseElement = popupProfileFormElement.querySelector(`.popup__close-button`);
const nameInput = popupProfileFormElement.querySelector(`.popup__input_field_name`);
const descriptionInput = popupProfileFormElement.querySelector(`.popup__input_field_description`);

// объявления для профиля
const profileName = document.querySelector(`.profile__name`);
const profileDescription = document.querySelector(`.profile__description`);

//попап с большой картинкой
const bigImagePopup = document.querySelector(`.popup_image`);
const bigImagePopupClose = bigImagePopup.querySelector(`.popup__close-button`);

//объявления для формы 2
//объявления для добавления фото
const popupPlace = document.querySelector(`.popup_new-item`);
const newCardButton = document.querySelector(`.profile__add-button`);
const popupCloseElementPlace = document.querySelector(`.popup__close-button_new-item`);
const popupPlaceCreateBtn = popupPlace.querySelector(`.popup__save-button_new-item`);

//объявления для карточек
const cardSection = document.querySelector(`.elements`);
const cardsContainer = cardSection.querySelector(`.elements__cards`);
const cardTemplate = document.querySelector(`.element-template`);
const card = document.querySelector('.element')
const popupPlaceForm = popupPlace.querySelector(`.popup__form_new-item`);
// объявление для картинки
const imageCloseElement = popupPlace.querySelector(`.popup__close_element_image`);
const placeInput = popupPlaceForm.querySelector(`.popup__input_field_place`);
const urlInput = popupPlaceForm.querySelector(`.popup__input_field_url`);




//массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// функция сохранения информации профиля
function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
};






initialCards.forEach((function (dataCard) {
  renderCards(dataCard);
}));

//функция создания карточки
function createCard(data){
  const card = new Card({
name: data.name,
link: data.link   
  });

  return card;
}

//функция наполнение карточки
function renderCards(data) {
  cardSection.innerHTML = '';
  const cardName = data.name;
  const cardLink = data.link;
  const card = new Card(
    cardName,
    cardLink,
    "#card-element"
  );
  const cardElement = card.generateCard(data);
  cardTemplate.prepend(cardElement);
}


//обработчик событий СОЗДАТЬ
function addCardSubmitHandler(evt) {
  evt.preventDefault();
  createCard({ name: placeInput.value, link: urlInput.value });
  closePopup(popupPlace);
  popupPlaceForm.reset();
  popupPlaceCreateBtn.disabled = true;
  popupPlaceCreateBtn.classList.add('popup__save-button_disabled')
};

//функция видимости
function openPopup(target) {
  target.classList.add(`popup_opened`);
  document.addEventListener('keydown', closePopupEscape);
}

// функция скрытия
function closePopup(popup) {
  popup.classList.remove(`popup_opened`);
  document.removeEventListener('keydown', closePopupEscape);
}







//закрытие по оверлею
const closePopupOverlay = (e) => {
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', (e) => {
      if (e.target === popupElement) {
        closePopup(popupElement);
      }
    })
  })
};

closePopupOverlay();

const closePopupEscape = (e) => {
      if (e.key === "Escape") {
        closePopup(document.querySelector(`.popup_opened`));
      };
};



//функция очищения инпута у меня с компьютера работает, я не понимаю, почему замечание осталось
function clearInput(target) {
  if (target.value != '') {
    target.value = "";
  }
}

const editProfileValidation = new FormValidator(popupProfileForm, validationConfig);
editProfileValidation._enableValidation();
const addCardValidation = new FormValidator(popupPlace, validationConfig);
addCardValidation._enableValidation();

//открыть форму редактирования данных профиля
popupOpenButtonElement.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

//закрыть форму редактирования данных профиля
popupProfileCloseElement.addEventListener('click', () => {
  closePopup(popupProfile);
});


nameInput.addEventListener('click', clearInput);
descriptionInput.addEventListener('click', clearInput);
//сохранить данные профиля
popupProfileForm.addEventListener(`submit`, handleProfileSubmit);

//открыть форму добавления карточек фотографий
newCardButton.addEventListener('click', () => {
  openPopup(popupPlace);
});
//создать новую карточку
popupPlaceForm.addEventListener('submit', addCardSubmitHandler);

//закрыть карточку

popupProfileCloseElement.addEventListener('click', () => {
  closePopup(popupProfile);
});

//закрыть форму добавления карточки
popupCloseElementPlace.addEventListener('click', () => {
  closePopup(popupPlace);
});


bigImagePopupClose.addEventListener('click', () => {
  closePopup(bigImagePopup);
});















