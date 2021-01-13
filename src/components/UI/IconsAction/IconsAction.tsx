import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import EditIcon from "@material-ui/icons/Edit";
import ImageIcon from "@material-ui/icons/Image";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Tooltip } from "@material-ui/core";
import { styled } from "@material-ui/core";
interface IconActionProps {
  showViewImageIcon: boolean;
  id: number;
  children: JSX.Element[];
}
interface ClearActionProps {
  handleDeleteItemById: (itemId) => void;
}
interface EditActionProps {
  handleEditItemById: (itemId) => void;
}
interface ViewImageActionProps {
  handleViewImageItemById: (itemId) => void;
}
interface ModifyStockActionProps {
  handleModifyStockItemById: (itemId) => void;
}
interface ViewProductActionProps {
  handleViewProductItemById: (itemId) => void;
}
interface PrintBarCodeActionProps {
  handlePrintBarCodeItemById: (itemId) => void;
}
const CustomizedIconButton = styled(IconButton)({
  margin: 0,
  padding: 0,
  "&:hover": {
    opacity: "0.5",
  },
});
class IconsAction extends React.Component<IconActionProps> {
  static ClearAction = ({ handleDeleteItemById }: ClearActionProps) => (
    <Tooltip title="delete" placement="top">
      <CustomizedIconButton size="small" onClick={handleDeleteItemById}>
        <ClearIcon
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid #999",
            padding: "0.1em",
          }}
        />
      </CustomizedIconButton>
    </Tooltip>
  );
  static EditAction = ({ handleEditItemById }: EditActionProps) => (
    <Tooltip title="edit" placement="top">
      <CustomizedIconButton size="small" onClick={handleEditItemById}>
        <EditIcon
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid #999",
            padding: "0.1em",
          }}
        />
      </CustomizedIconButton>
    </Tooltip>
  );
  static ViewImageAction = ({
    handleViewImageItemById,
  }: ViewImageActionProps) => (
    <Tooltip title="view image" placement="top">
      <CustomizedIconButton size="small" onClick={handleViewImageItemById}>
        <ImageIcon
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid #999",
            padding: "0.1em",
          }}
        />
      </CustomizedIconButton>
    </Tooltip>
  );
  static ModifyStockAction = ({
    handleModifyStockItemById,
  }: ModifyStockActionProps) => (
    <Tooltip title="modify stock" placement="top">
      <CustomizedIconButton size="small" onClick={handleModifyStockItemById}>
        <DescriptionIcon
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid #999",
            padding: "0.1em",
          }}
        />
      </CustomizedIconButton>
    </Tooltip>
  );
  static ViewProductAction = ({
    handleViewProductItemById,
  }: ViewProductActionProps) => (
    <Tooltip title="view product" placement="top">
      <CustomizedIconButton size="small" onClick={handleViewProductItemById}>
        <ViewHeadlineIcon
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid #999",
            padding: "0.1em",
          }}
        />
      </CustomizedIconButton>
    </Tooltip>
  );
  static PrintBarCodeAction = ({
    handlePrintBarCodeItemById,
  }: PrintBarCodeActionProps) => (
    <Tooltip title="print barcode" placement="top">
      <CustomizedIconButton size="small" onClick={handlePrintBarCodeItemById}>
        <StorefrontIcon
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid #999",
            padding: "0.1em",
          }}
        />
      </CustomizedIconButton>
    </Tooltip>
  );
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default IconsAction;
