import React, { useReducer, createContext } from 'react';
import { ResourceType } from '../constants/resource-types';
import { useNonNullableContext } from '../hooks/useNonNullableContext';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const OPEN_SAVED_ITEMS = 'OPEN_SAVED_ITEMS';

type SavedItem = {
  id: string;
  title: string;
  poster?: string;
  type: ResourceType;
};

type State = {
  isOpen: boolean;
  items: Record<SavedItem['id'], SavedItem>
}

type AddItem = {
  type: typeof ADD_ITEM;
  item: SavedItem
};

type ClearItem = {
  type: typeof CLEAR_ITEMS;
};

type CloseItem = {
  type: typeof REMOVE_ITEM,
  id: string;
}

type OpenSaveItems = {
  type: typeof OPEN_SAVED_ITEMS,
}

type SavedActions = AddItem | ClearItem | CloseItem | OpenSaveItems;

const initState = { isOpen: false, items: {} };

const SavedStateContext = createContext<State | undefined>(undefined);
const SavedDispatchContext = createContext<React.Dispatch<SavedActions> | undefined>(undefined);

const reducer = (state: State, action: SavedActions) => {
  switch (action.type) {
    case OPEN_SAVED_ITEMS: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.id]: action.item,
        },
      };
    }
    case REMOVE_ITEM:
      return {
        ...state,
        items: Object.entries(state.items).reduce((items, [id, item]) => (id !== action.id ? { ...items, [id]: item } : items), {}),
      };
    case CLEAR_ITEMS:
      return { ...state, items: {} };
    default:
      return state;
  }
};

type Props = {
  children: React.ReactNode;
}

export const SavedProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SavedDispatchContext.Provider value={dispatch}>
      <SavedStateContext.Provider value={state}>
        {children}
      </SavedStateContext.Provider>
    </SavedDispatchContext.Provider>
  );
};

export const useSaved = () => useNonNullableContext(SavedStateContext);
export const useDispatchSaved = () => useNonNullableContext(SavedDispatchContext);
