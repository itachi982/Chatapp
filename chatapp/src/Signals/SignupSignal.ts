import { signal } from "@preact/signals-core";

export const formDataSignal = signal({
    id:"",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });