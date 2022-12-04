//общие штуки
//функция видимости
const openPopup = (popup) => {
  popup.classList.add(`popup_opened`);
}


// объявления для формы 1
const popupOpenButtonElement = document.querySelector(`.profile__edit-button`);
const popup = document.querySelector(`.popup`);
const popupProfile = document.querySelector(`.popup_profile`);
const popupElement = document.querySelector(`.popup__container`);
const popupForm = document.querySelector(`.popup__form`);
const popupCloseElement = popupElement.querySelector(`.popup__close-button`);
const nameInput = popupElement.querySelector(`.popup__input_field_name`);
const descriptionInput = popupElement.querySelector(`.popup__input_field_description`);
const popupSaveButton = popupElement.querySelector(`.popup__save-button`);

// объявления для профиля
const profileName = document.querySelector(`.profile__name`);
const profileDescription = document.querySelector(`.profile__description`);

// функция сохранения информации профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
};


//объявления для формы 2
//объявления для добавления фото
const popupPlace = document.querySelector(`.popup_new-item`);
const createButton = document.querySelector(`.popup__save-button_new-item`);

const addCardButton = document.querySelector(`.profile__add-button`);
const popupCloseElementPlace = document.querySelector(`.popup__close-button_new-item`);

//объявления для карточек
const cardSection = document.querySelector(`.elements`);
const card = cardSection.querySelectorAll(`.element`);

const cardList = cardSection.querySelector(`.elements__cards`);
const cardTemplate = document.querySelector(`.element-template`);
const addedCard = cardTemplate.content.cloneNode(true);
const popupPlaceForm = popupPlace.querySelector(`.popup__form_new-item`);







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
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let newCardTitle = '';
let newCardLink = '';
//содержание карточки
function generateCard(dataCard){
  const newCard = cardTemplate.content.cloneNode(true);
  const newTitle = newCard.querySelector(`.element__title`);
  const newImage = newCard.querySelector(`.element__image`);
  newTitle.textContent = dataCard.name;
  newImage.alt = dataCard.name;
  newImage.src = dataCard.link;
  const cardLikeButton = newCard.querySelector('.element__like-button');
  cardLikeButton.addEventListener('click', e => {e.target.classList.toggle(`element__like-button_is-activated`)});
  const cardDeleteButton = newCard.querySelector(`.element__delete-button`);
  cardDeleteButton.addEventListener('click', e => { e.target.closest('.element').remove() });

  newImage.addEventListener('click', e =>{  console.log(e); openBigImage(e.target)});
  return newCard;
}

//обработчик событий СОЗДАТЬ
function cardSubmitHandler(evt) {
  evt.preventDefault();
  const placeInput = popupPlaceForm.querySelector(`.popup__input_field_place`);
const urlInput = popupPlaceForm.querySelector(`.popup__input_field_url`);
  renderCard({name: placeInput.value, link: urlInput.value});
  closePopup(popupPlace);
};
 
//функция создания карточки, которая не работает
function renderCard(dataCard){
  cardList.prepend(generateCard(dataCard));
}

initialCards.forEach((function (dataCard) {
  renderCard(dataCard);
}));



//открыть форму редактирования данных профиля
popupOpenButtonElement.addEventListener('click', () => {
  openPopup(popupProfile);
});
//закрыть форму редактирования данных профиля
popupCloseElement.addEventListener('click', () => {
  closePopup(popupProfile);
});
//сохранить данные профиля
popupForm.addEventListener(`submit`, formSubmitHandler);

//открыть форму добавления карточек фотографий
addCardButton.addEventListener('click', () => {
  openPopup(popupPlace);
});
//создать новую карточку
popupPlaceForm.addEventListener('submit', cardSubmitHandler);


//закрыть форму добавления карточки
popupCloseElementPlace.addEventListener('click', () => {
  closePopup(popupPlace);
});


//попап с большой картинкой
const bigImagePopup = document.querySelector(`.image-popup`);
const bigImage = bigImagePopup.querySelector(`.image-popup__image`);
const bigImageTitle = bigImagePopup.querySelector(`.image-popup__title`);

function openBigImage(image){
debugger;
  bigImage.src = image.src;
  bigImageTitle = image.alt;
  bigImagePopup.classList.add(`.image-popup_opened`);
}



// функция скрытия
const closePopup = (popup) => {
  popup.classList.remove(`popup_opened`);
}
popupCloseElement.addEventListener('click', () => {
  closePopup(popup);
});














