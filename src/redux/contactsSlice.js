import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { filterSelector } from "./filterSlice";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.contacts.isLoading = false;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        (state) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.contacts.error = action.payload;
          state.contacts.isLoading = false;
        }
      );
  },
});

// reducers, actions
export const contactReducer = contactsSlice.reducer;
export const { setLoading, setError, fetchDataSuccess } = contactsSlice.actions;

// selectors
export const selectContacts = (state) => state.contacts.contacts.items;

export const selectIsLoading = (state) => state.contacts.contacts.isLoading;

export const selectError = (state) => state.contacts.contacts.error;

// memo-selectors
export const selectFilteredContacts = createSelector(
  [selectContacts, filterSelector],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
