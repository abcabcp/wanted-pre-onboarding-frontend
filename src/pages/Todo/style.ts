import styled from 'styled-components';

export const TodoContainer = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
  & .input-contents {
    display: flex;
    margin-bottom: 2rem;
    & .todo-input {
      flex-grow: 1;
    }
    & .submit-btn {
      margin-left: 10px;
      flex-shrink: 0;
      width: 12.5rem;
    }
  }
  & .list-contents {
    margin-bottom: 5rem;
    & .no-content {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 30rem;
      font-size: 2rem;
    }
    ul {
      li {
        padding: 1rem;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 2rem;
        border-radius: 1rem;
        background-color: var(--primary-200);

        & .todo-left {
          display: flex;
          align-items: center;
          & .completed {
            width: 2rem;
            height: 2rem;
          }
          & .todo {
            width: 80%;
            margin-left: 1rem;
            word-break: break-all;
          }
          & .edit-input {
            margin-left: 1rem;
            width: 35rem;
          }
        }
        & .todo-icon-contents {
          display: flex;
          align-items: center;

          & .todo-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 5rem;
            height: 5rem;
            border-radius: 999rem;
            :hover {
              transition: 1000ms;
              background-color: var(--white);
            }
            img {
              width: 5rem;
              height: 5rem;
            }
            img.delete {
              width: 3rem;
              height: 3rem;
            }
            img.edit {
              width: 3.4rem;
              height: 3.4rem;
            }
            img.cancel {
              width: 4rem;
              height: 4rem;
            }
          }
        }
      }
    }
  }
`;
