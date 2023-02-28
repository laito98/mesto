
export const initialCards = [
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

export class Card {
 constructor(elementCardName, elementCardLink, templateSelector){

  this._name = elementCardName;
  this._link = elementCardLink;

  this._templateSelector = templateSelector;
 }

 //клонирование разметки карточки
 _getTemplate () {
  const cardElement = document
  .querySelector('.element-template')
  .content
  .querySelector('#element-card')
  .cloneNode(true);

  return cardElement;
 }

 //наполнение разметки карточки
 generateCard (data) {

  
  this._element = this._getTemplate();
  this._image = this._element.querySelector('.element__image');
  this._deleteButton = this._element.querySelector('.element__delete-button');
  this._likeButton = this._element.querySelector('.element__like-button');
  this._title = this._element.querySelector('.element__title');
  this._bigImagePopup = document.querySelector('.popup_image');
  this._bigImagePopupImg = document.querySelector('.popup__img');
  this._bigImagePopupTitle = document.querySelector('.popup__title');
  this._bigImagePopupCloseButton = document.querySelector('.popup__close-button');
  this._image.src = data.link;
  this._image.alt = data.name;
  this._title.textContent = data.name;

  this._setEventListeners();

  return this._element;
  }

  

 _handleDeleteCard = (e) => {
  this._element.remove();
  this._element = null;
};
 

 _handleLikeButton = () => {
  this._likeButton.classList.toggle('element__like-button_is-activated')};

  _handleImageOpenPopup = () =>{
    this._bigImagePopupTitle.textContent = this._name,
    this._bigImagePopupImg.src = this._link,
    this._bigImagePopupImg.alt = this._name,
    this._bigImagePopup.classList.add('popup_opened');


  }


  _setEventListeners = () => {

    this._deleteButton.addEventListener('click', this._handleDeleteCard);
    this._likeButton.addEventListener('click', this._handleLikeButton);
    this._image.addEventListener('click', ()=>{
      this._handleImageOpenPopup(this._link, this._image);
    });
    this._bigImagePopupCloseButton.addEventListener('click', this._closeBigPhoto);
  }
}






