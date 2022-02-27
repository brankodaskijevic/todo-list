import { FC} from 'react'
import { OptionsType, SelectMenuProps } from './interfaces'
import classes from './SelectMenu.module.css'

const SelectMenu: FC<SelectMenuProps> = ({
  value,
  selectHandler,
  defaultValue,
  data
}) => {

  return (
    <select
      value={value}
      className={classes.todo_select}
      onChange={selectHandler}>
      <option >{defaultValue}</option>
      {data.map((option: OptionsType) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  )
}

export default SelectMenu