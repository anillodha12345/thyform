import React, { useState } from "react"

import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = (props) => {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })
console.log(props.style.color,'props.styleprops.styleprops.style')
  return (
    <Nav className="my-auto" ref={ref}>
      <Form
        className={
          search === false
            ? "searchbar fadeOutWidth pt-2"
            : search === true
            ? "searchbar fadeInWidth"
            : "searchbar  pt-2"
        }
      >
        {search === true && (
          <input
            ref={ref} 
         
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            type="text"
            name=""
            placeholder="Search..."
          />
        )}
        <div
          className={
            search === true
              ? "fadeOut"
              : search === false
              ? "fadeIn"
              : ""
          }
          style={{color:props.style.color}}
        >
          {search !== true && (
            <FontAwesomeIcon
         
              onClick={toggle}
              className={
                search === true
                  ? "fadeOut"
                  : search === false
                  ? " fadeIn"
                  : ''
              }
              icon={faSearch}
            />
          )}
        </div>
      </Form>
    </Nav>
  )
}

export default Search
