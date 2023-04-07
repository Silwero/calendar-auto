import { List } from '@mui/material';
import { VehicleListItem } from './VehicleListItem';

export const VehicleList = ({ vehicleList, deleteVehicle }) => {
  return (
    <List>
      {vehicleList.map(({ name, id }) => {
        return <VehicleListItem name={name} key={id} handleDelete={() => deleteVehicle(id)} />;
      })}
    </List>
  );
};
