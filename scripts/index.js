const popupOpenButtonElement = document.querySelector(`.profile__edit-button`);
const popup = document.querySelector(`.popup`);
const popupElement = document.querySelector(`.popup__container`);
const popupForm = document.querySelector(`.popup__form`);
const popupCloseElement = popupElement.querySelector(`.popup__close-button`);
const nameInput = document.querySelector(`.popup__input_field_name`);
const descriptionInput = document.querySelector(`.popup__input_field_description`);
const popupSaveButton = document.querySelector(`.popup__save-button`);
const profileName = document.querySelector(`.profile__name`);
const profileDescription = document.querySelector(`.profile__description`);


const addPopupVisibility = function () {
  popup.classList.add(`popup_opened`);
  nameInput.textContent = profileName.textContent;
  descriptionInput.textContent = profileDescription.textContent;
};

const removePopupVisibility = function () {
  popup.classList.remove(`popup_opened`);
};


function formSubmitHandler(evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent= descriptionInput.value;
  removePopupVisibility();
};



popupOpenButtonElement.addEventListener('click', addPopupVisibility);
popupCloseElement.addEventListener('click', removePopupVisibility);
popupForm.addEventListener(`submit`, formSubmitHandler);



//const activateLikeButton = function(){
//  cardLikeButton.classList.remove(`element__like-button`);
//  cardLikeButton.classList.toggle(`element__like-button_is-activated`);
//}
//cardLikeButton.addEventListener(`click`, activateLikeButton);
 // const cardElement = document.querySelector(`.element`);
 // const cardLikeButton = cardElement.querySelector(`.element__like-button`);
 // cardLikeButton.addEventListener(`click`, (function () {
 //   if (cardLikeButton.classList.contains(`element__like-button`)){
 //     cardLikeButton.classList.remove(`element__like-button`);
 //     cardLikeButton.classList.toggle(`element__like-button_is-activated`);
 //   } else {
 //     cardLikeButton.classList.remove(`element__like-button_is-activated`);
 //     cardLikeButton.classList.toggle(`element__like-button`);
 //   }
 // }));











