import './tableFilter.css';
import { useState } from 'react';

interface TableFilterProps {
  filterBasicInputs: string[];
  filterAdvancedInputs?: string[];
}
const TableFilter = ({
  filterBasicInputs,
  filterAdvancedInputs,
}: TableFilterProps) => {
  const [open, setOpen] = useState(false);
  const [openRozsireneVyhladavanie, setOpenRozsireneVyhladavanie] =
    useState(false);

  return (
    <div className={'ress-admin-table-filter'}>
      <div className={'head'}>
        <h2 className={'title'} >
          {`Filtrovat obsah`}
        </h2>
        <div>
          <button
            onClick={() => setOpen(old => !old)}
          >
            {open
              ? `Zabalit filter`
              : 'Rozbalit filter'}
          </button >
        </div>
      </div>
      {open ? (
        <>
          <div className={'inputs'}>
            {filterBasicInputs.map((filterInput, index) => (
              <input />
            ))}
            {openRozsireneVyhladavanie &&
              filterAdvancedInputs?.map((filterInput, index) => (
                <div key={index} className={'input'}>
                  <input />
                </div>
              ))}
          </div>
          <div className={'rozsirene-vyhladavanie'}>
            {filterAdvancedInputs && filterAdvancedInputs.length > 0 ? (
              <button
                onClick={() => setOpenRozsireneVyhladavanie(old => !old)}
              >
                {openRozsireneVyhladavanie
                  ?`Jedonduche vyhladavanie`
                  : `Rozsirene vyhladavanie`}
              </button >
            ) : null}
          </div>
          <button  className={'filter-button'} >
            {`Filtrovat`}
          </button >
        </>
      ) : null}
    </div>
  );
};
export default TableFilter;
