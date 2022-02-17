import { useQuery } from "@apollo/client";
import { Avatar, Box, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { GET_ACTIVE_USERS_IMG } from "../queries/users";
import { userSlice } from "../store/slices/UserSlice";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error, refetch } = useQuery(GET_ACTIVE_USERS_IMG);
  const { activeUsersImgs } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    refetch();
  }, [activeUsersImgs]);

  useEffect(() => {
    if (!loading) {
      dispatch(
        userSlice.actions.setActiveUsersImg(
          data.getActiveUsers.map((user: { avatar: string }) => user.avatar)
        )
      );
      console.log(activeUsersImgs);
    }
  }, [data]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" sx={{ m: "64px 16px", alignSelf: "center" }}>
        Home Page
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        {activeUsersImgs.map((img, index) => {
          return (
            <Avatar
              sizes="100"
              sx={{ width: "150px", height: "150px" }}
              key={index}
              src={img}
            />
          );
        })}
      </Box>
      <Typography variant="body1" sx={{ m: "64px 128px" }}>
        Идейные соображения высшего порядка, а также укрепление и развитие
        структуры играет важную роль в формировании существенных финансовых и
        административных условий. С другой стороны укрепление и развитие
        структуры обеспечивает участие в формировании систем массового участия.
        Таким образом реализация намеченных плановых заданий позволяет оценить
        значение новых предложений. Повседневная практика показывает, что
        укрепление и развитие структуры обеспечивает широкому кругу
        (специалистов) участие в формировании дальнейших направлений развития.
        Идейные соображения высшего порядка, а также дальнейшее развитие
        различных форм деятельности позволяет оценить значение новых
        предложений. Товарищи! сложившаяся структура организации представляет
        собой интересный эксперимент проверки направлений прогрессивного
        развития.
      </Typography>
    </Box>
  );
};

export default HomePage;
