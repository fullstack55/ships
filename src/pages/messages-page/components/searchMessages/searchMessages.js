import React, {useState} from "react";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import Button from "../../../../components/common/button/button";

import './searchMessages.sass';
import InputField from "../../../../components/common/input-field/input-field";
import Select from "../../../../components/common/select/select";
import Checkbox from "../../../../components/common/checkbox/checkbox";


const SearchMessages = () => {
  const [checkBoxes, setCheckBoxes] = useState({
    showFull: true,
    searchBy: true,
    test: true,
    anotherTest: true,
    design: true,
    inbox: true,
    checkAll: true,
  })

  const handleCheckBox = (name, checked) => {
    console.log(name)
    setCheckBoxes({
      ...checkBoxes,
    [name]: !checked
    })
    console.log(checkBoxes)
  }
  return (
    <div className={'search'}>
      <Typography firstText={'Search'} secondText={'Personal Messages'}/>
      <Paper className={'search__paper'}>
        <div className={'search__paper-container-top'}>
          <div className={'search__paper-container-left'}>
            <div className="search_for_user">
                <InputField label={'Search for:'}/>
                <Select options={[{value:'Match any words', label:'Match any words'}]}/>
                <InputField label={'by user:'}/>
            </div>

            <div className="search_for_user">
              {/* <div className={'search__paper-container-left__withChild'}> */}
                <InputField label={'Age:'} firstChild={'Between'}/>
                <InputField firstChild={'and'} lastChild={'days'}/>
              {/* </div> */}

              <div className={'search__paper-right-check'}>
                <Checkbox
                  onChange={handleCheckBox}
                  name={'showFull'}
                  checked={checkBoxes.showFull}
                  label={'Show full message in results.'}
                />
                <Checkbox
                  onChange={handleCheckBox}
                  name={'searchBy'}
                  checked={checkBoxes.searchBy}
                  label={'Search by subject and author only.'}
                />
              </div>
            </div>

            <div className={'last-item'}>
              <p>Order results by</p>
              <Select options={[{value:'Most recent first', label:'Most recent first'}]}/>
            </div>
          </div>
        </div>


        <div className={'search__paper-container-bottom'}>
          <div>
            <p className={'container-bottom__paragraph'}>Choose labels to search by, or search all</p>
          </div>
          <div className={'search__paper-container-bottom__checkBlock'}>
            <div>
              <Checkbox
                onChange={handleCheckBox}
                name={'test'}
                checked={checkBoxes.test}
                label={'test'}
              />
              <Checkbox
                onChange={handleCheckBox}
                name={'anotherTest'}
                checked={checkBoxes.anotherTest}
                label={'another text'}
              />
            </div>
            <div>
              <Checkbox
                onChange={handleCheckBox}
                name={'design'}
                checked={checkBoxes.design}
                label={'design test 1'}
              />
              <Checkbox
                onChange={handleCheckBox}
                name={'inbox'}
                checked={checkBoxes.inbox}
                label={'Inbox'}
              />
            </div>
            <Checkbox
              onChange={handleCheckBox}
              name={'checkAll'}
              checked={checkBoxes.checkAll}
              label={'check all'}
            />
          </div>
          <div></div>
        </div>

        <div>
          <Button className={'search__paper__button'} variant={'secondary'}>Search</Button>
        </div>
      </Paper>
    </div>
  )
}

export default SearchMessages