import React from "react";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import "./buddies-list.sass";
import InputField from "../../../../components/common/input-field/input-field";
import Button from "../../../../components/common/button/button";

const BuddiesList = () => (
  <div className="buddies">
    <Typography
      className="buddies__title"
      firstText="Buddies"
      secondText="list"
    />
    <Paper className="buddies__paper">
      <Typography firstText="Add To Buddy" secondText="List" before />
      <div className="buddies__container_add">
        <InputField className="buddies__input" label="Member Name:" />
        <Button className="buddies__button" variant={"secondary"}>
          ADD
        </Button>
      </div>
    </Paper>
    <Paper className="buddies__paper">
      <Typography firstText="Edit" secondText="buddies" before />
      <table className="buddies__table">
        <tbody>
          <tr>
            <th>NAME</th>
            <th>STATUS</th>
            <th>EMAIL</th>
            <th>ICQ</th>
            <th>AIM</th>
            <th>YIM</th>
            <th>MSN</th>
            <th>REMOVE</th>
          </tr>
          <tr>
            <td>Clyde Dickens</td>
            <td>
              <button className="buddies__status" />
            </td>
            <td>
              <button className="buddies__mail" />
            </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <button className="buddies__remove" />
            </td>
          </tr>
          <tr>
            <td>Robert J Smith</td>
            <td>
              <button className="buddies__status" />
            </td>
            <td>
              <button className="buddies__mail" />
            </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <button className="buddies__remove" />
            </td>
          </tr>
          <tr>
            <td>Tomas Pinas</td>
            <td>
              <button className="buddies__status" />
            </td>
            <td>
              <button className="buddies__mail" />
            </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <button className="buddies__remove" />
            </td>
          </tr>
        </tbody>
      </table>
    </Paper>
  </div>
);

export default BuddiesList;
