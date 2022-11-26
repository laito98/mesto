const popupOpenButtonElement = document.querySelector(`.profile__edit-button`);
const popupElement = document.querySelector(`.popup`);
const popupCloseElement = popupElement.querySelector(`.popup__close-button`);
const editForm = document.querySelector(`.popup__container`);
const nameInput = document.querySelector(`.popup__input_name`);
const descriptionInput = document.querySelector(`.popup__input_description`);
const formSaveButton = document.querySelector(`.popup__save-button`);
const profileName = document.querySelector(`.profile__name`);
const profileDescription = document.querySelector(`.profile__description`);


const addPopupVisibility = function () {
  popupElement.classList.add(`popup_is-opened`);
};

const removePopupVisibility = function () {
  popupElement.classList.remove(`popup_is-opened`);
};

function formSubmitHandler(evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent= `${descriptionInput.value}`;
  removePopupVisibility();
};

popupOpenButtonElement.addEventListener('click', addPopupVisibility);
popupCloseElement.addEventListener('click', removePopupVisibility);
popupElement.addEventListener(`submit`, formSubmitHandler);



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











