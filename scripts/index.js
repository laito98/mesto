//общие штуки


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
const bigImage = bigImagePopup.querySelector(`.popup__img`);
const bigImageTitle = bigImagePopup.querySelector(`.popup__title`);
const bigImagePopupClose = bigImagePopup.querySelector(`.popup__close-button`);

//объявления для формы 2
//объявления для добавления фото
const popupPlace = document.querySelector(`.popup_new-item`);
const newCardButton = document.querySelector(`.profile__add-button`);
const popupCloseElementPlace = document.querySelector(`.popup__close-button_new-item`);

//объявления для карточек
const cardSection = document.querySelector(`.elements`);
const cardsContainer = cardSection.querySelector(`.elements__cards`);
const cardTemplate = document.querySelector(`.element-template`);
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
  newImage.addEventListener('click', e =>{{
    openPopup(bigImagePopup);
    bigImage.src = dataCard.link;
    bigImage.alt = dataCard.name;
    bigImageTitle.textContent = dataCard.name;
  }});
  return newCard;
}

//обработчик событий СОЗДАТЬ
function addCardSubmitHandler(evt) {
  evt.preventDefault();
  renderCard({name: placeInput.value, link: urlInput.value});
  closePopup(popupPlace);
};
 
//функция видимости
function openPopup(target) {
  target.classList.add(`popup_opened`);
}


// функция скрытия
function closePopup(popup) {
  popup.classList.remove(`popup_opened`);
}


//функция создания карточки
function renderCard(dataCard){
  cardsContainer.prepend(generateCard(dataCard));
}

initialCards.forEach((function (dataCard) {
  renderCard(dataCard);
}));


//функция очищения инпута у меня с компьютера работает, я не понимаю, почему замечание осталось
function clearInput(target){
  if (target.value !=''){
    target.value = "";
  }
}



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


urlInput.addEventListener('click', clearInput);
nameInput.addEventListener('click', clearInput);
placeInput.addEventListener('click', clearInput);
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


bigImagePopupClose.addEventListener('click', () =>{
  closePopup(bigImagePopup);
});
















