type ICheckboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void
type ICheckboxGroupOnChange = (checkedValue: string[]) => void

export interface Option {
  label: string
  value: string
  disabled?: boolean
}
export interface ICheckbox {
  garish?: string
  autoFocus?: boolean
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: ICheckboxOnChange
}
export interface ICheckboxGroup {
  defaultValue?: string[]
  disabled?: boolean
  name?: string
  options: string[] | Option[]
  value?: string[]
  onChange?: ICheckboxGroupOnChange
}
