
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import EditClub from '../pages/EditClub'
describe("<EditClub/>", () => {
  
  const bookClubs = [
    {
      id: 1, 
      name: "Literary Legends",
      meeting_dates: "Tuesdays",
      book_club_image: "https://t3.ftcdn.net/jpg/05/32/69/64/360_F_532696455_KAce2D5R3bxfo5qdKFeKhOqgWhO2fKmz.jpg",
      book_of_the_month: "The Ballad of Songbirds and Snakes",
      book_of_the_month_picture: "https://upload.wikimedia.org/wikipedia/ar/f/f1/The_Ballad_of_Songbirds_and_Snakes_%28Suzanne_Collins%29.png",
      summary: "Fantasy fans unite! Read fantasy books with us monthly."
    }
  ]
  const updateBookClub = jest.fn();
  const currentUser = {
    id: 1,
    email: "hungergamesfan@example.com",
    password: "password",
    password_confirmation: "password",
    username: "JaneAusten",
    profile_picture: "https://media.istockphoto.com/id/1292618730/photo/elegant-jane-austen-style-woman-strolling-a-courtyard.jpg?s=1024x1024&w=is&k=20&c=rUj70rq6t6KVVCtlW7FPFImCBpvZ2EVcbR6H4i2mKOg="
  }
  const memberships = [
    {
      id: 1,
      club_id: 1,
      user_id: 1,
      name: "fantasy club"
    }
  ]
  
  it('renders EditClub component with form fields', () => {
    render(
      <BrowserRouter>
        <EditClub
          bookClubs={bookClubs}
          updateBookClub={updateBookClub}
          currentUser={currentUser}
          memberships={memberships}
        />
      </BrowserRouter>
    )
    const nameInput = screen.getByLabelText('Name');
    const summaryInput = screen.getByLabelText('Summary')
    const meetingDatesInput = screen.getByLabelText('Meeting Dates');
    const bookOfTheMonthInput = screen.getByLabelText('Book of the Month');
    const bookOfTheMonthPictureInput = screen.getByLabelText('URL for book of the month picture');
  
    expect(nameInput).toBeInTheDocument();
    expect(summaryInput).toBeInTheDocument();
    expect(meetingDatesInput).toBeInTheDocument();
    expect(bookOfTheMonthInput).toBeInTheDocument();
    expect(bookOfTheMonthPictureInput).toBeInTheDocument();
  })
  it('renders UI elements correctly', () => {
    render(
      <BrowserRouter>
        <EditClub
          bookClubs={bookClubs}
          updateBookClub={updateBookClub}
          currentUser={currentUser}
          memberships={memberships}
        />
      </BrowserRouter>
    );
  
    expect(screen.getByText('Edit Club')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Summary')).toBeInTheDocument()
    expect(screen.getByLabelText('Meeting Dates')).toBeInTheDocument()
    expect(screen.getByLabelText('Book of the Month')).toBeInTheDocument()
  });
})

