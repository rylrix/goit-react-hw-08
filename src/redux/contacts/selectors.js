import { createSelector } from "@reduxjs/toolkit";
import { filterSelector } from "../filters/selectors";

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
