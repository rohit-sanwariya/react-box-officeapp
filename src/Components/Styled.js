import styled from "styled-components";


export const FlexGrid = styled.div`
display: flex;
justify-content:center;
flex-wrap:wrap;
`

export const SearchCard = styled.div`
width: 300px;
height: 100%;
margin: 0 15px 40px;
.img-wrapper{
    width:100%;
    border-radius:40px;
    height:420px;
    overflow: hidden;
    border: 1px solid #ddd;
    img{
    object-fit:cover;
    height: 100%;
    width: 100%;
}
}
h1{
    margin: 10px 0;
    font-size:21px
}
p{
    margin:0;
}
`

export const Star = styled.div`
display:inline-block;
width:18px;
height:18px;
margin-left: 10px;
background-color:#ffc806;
clip-path: polygon(50% 0%,
 61% 35%, 
 98% 35%, 
 68% 57%, 
 79% 91%,
  50% 70%, 
 21% 91%,
  32% 57%,
  2% 35%,
  39% 35%);
`
export const BStar = styled.div`
display:inline-block;
width:18px;
height:18px;
margin-left: 10px;
background-color:#ddd;

clip-path: polygon(50% 0%,
 61% 35%, 
 98% 35%, 
 68% 57%, 
 79% 91%,
  50% 70%, 
 21% 91%,
  32% 57%,
  2% 35%,
  39% 35%);
`
export const halfStar = styled.div`
display:inline-block;
width:18px;
height:18px;
background-color:#ffc806;
clip-path: polygon(50% 0%,
 61% 35%, 
 98% 35%, 
 68% 57%, 
 79% 91%,
  50% 70%, 
 21% 91%,
  32% 57%,
  2% 35%,
  39% 35%);
`

export const ShowPageWrapper = styled.div`
padding:0 20px;

@media only screen and (min-width: 516px){
    padding: 0 40px;
}
@media only screen and (min-width: 768px){
    padding: 0 60px;
}
@media only screen and (min-width: 992px){
    padding: 0 80px;
}`

export const InfoBlock = styled.div`
margin-bottom:40px;
h2{
    margin:0;
    margin-bottom:30px;
    font-size: 22px;
}`


// ShowMainData 

export const MainDataWrapper = styled.div`
display:flex;
margin-bottom:40px;
img{
    min-width:250px;
    width:300px;
    margin-right:30px

}
`

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;


export const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
     
   padding:12px;
    border-radius: 25px;
    font-size: 14px;
    text-align: center;
  }
`;


export const DetailsWrapper = styled.div`
p{
    margin : 5px 0;
    span{
        font-weight:bold;
    }
}
`


export const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }

  span {
    font-weight: 700;
  }
`;

export const SeasonList = styled.div`
  display: flex;
  flex-direction: column;

  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:last-child {
      margin-bottom: 0;
    }

    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }

    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;


export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;

  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;

    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }

  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .actor {
    margin-left: 25px;

    .bold {
      font-weight: bold;
    }
  }
`;
