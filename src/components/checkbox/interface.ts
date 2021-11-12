type ICheckboxOnChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => void
interface OnChangeFunc {
  (checkedValue: string[]): void
}
interface Option {
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
  onChange?: ICheckboxOnChangeFunc
}
export interface ICheckboxGroup {
  defaultValue?: string[]
  disabled?: boolean
  name?: string
  options?: string[] | Option[]
  value?: string[]
  onChange?: OnChangeFunc
}
