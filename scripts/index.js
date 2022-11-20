const popupOpenButtonElement = document.querySelector(`.profile__edit-button`);
const popupElement = document.querySelector(`.edit-form`);
const popupCloseElement = popupElement.querySelector(`.edit-form__close-button`);

const togglePopupVisibility = function () {
  popupElement.classList.toggle(`edit-form_is-opened`);
}

popupOpenButtonElement.addEventListener('click', function () {
  popupElement.classList.toggle(`edit-form_is-opened`);
});

const removePopupVisibility = function () {
  popupElement.classList.remove(`edit-form_is-opened`);
}

popupCloseElement.addEventListener('click', removePopupVisibility);



const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  } else {
    removePopupVisibility();
  }
}

popupElement.addEventListener(`click`, closePopupByClickOnOverlay);

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

const editForm = document.querySelector(`.edit-form__container`);
const nameInput = document.querySelector(`.edit-form__name-field`);
const descriptionInput = document.querySelector(`.edit-form__description-field`);
const formSaveButton = document.querySelector(`.edit-form__save-button`);

function formSubmitHandler(evt){
  evt.preventDefault();
  const profileName = document.querySelector(`.profile__name`);
  const profileDescription = document.querySelector(`.profile__description`);
  profileName.textContent = `${nameInput.value}`;
  profileDescription.textContent= `${descriptionInput.value}`;
};

formSaveButton.addEventListener(`click`, formSubmitHandler);





