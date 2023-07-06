export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messengerReducer(state, action) {
  // console.log(state, action);
  // Object { selectedId: 0, message: "Hello" }
  // Object { type: "changed_selection", contactId: 1 }
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'sent_message': {
      return {
        ...state,
        message: '',
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}
