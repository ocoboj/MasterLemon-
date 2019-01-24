import { actionsEnums} from '../common/actionsEnums';

export const updateNames = (newName: string) => ({
    type: actionsEnums.UPDATE_NAME,
    payload: newName,
})