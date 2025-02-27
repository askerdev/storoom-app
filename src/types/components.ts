import { ReactElement } from "react";
import { TAllowedFileExtensions } from "./request.api";

export type Option<T = string> = {
  value: T;
  label: string;
};

export type Action<TData = unknown> = {
  label: string;
  content: (data: TData) => ReactElement;
  children: (data: TData) => ReactElement;
};

export interface IFile {
  id: string;
  link: string;
  name: string;
  type: TAllowedFileExtensions;
}
