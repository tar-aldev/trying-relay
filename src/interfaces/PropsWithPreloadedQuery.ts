import { PreloadedQuery } from "react-relay";
import { OperationType } from "relay-runtime";

export interface PropsWithPreloadedQuery<T extends OperationType> {
  data: PreloadedQuery<T>;
}
