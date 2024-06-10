import {GenerateWorkerType} from "types/utilsTypes";

export const generateWorker: GenerateWorkerType = (id) => ({
    id,
    lastName: `Фамилия №${id}`,
    firstName: `Имя №${id}`,
    position: `Позиция №${id}`,
});
