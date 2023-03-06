require "application_system_test_case"

class GamesTest < ApplicationSystemTestCase
  test "Going to /new gives us a new random grid to play with" do
    visit new_url
    assert test: "New game"
    assert_selector "li", count: 10
  end

  test "Fill in the form with a random word and get message that the word is not in the grid" do
    visit new_url
    fill_in 'What is the longest word you can find?', with: 'sell'
    click_on 'Play'
    assert test: "Random word input"
    assert_text "Sorry, but sell can't be built"
  end

  test "Fill in the form with a one letter consonant and get message that the word is not a valid English word" do
    visit new_url
    fill_in 'What is the longest word you can find?', with: 'busss'
    click_on 'Play'
    assert test: "Invalid word input"
    assert_text "Sorry, but busss does not seem to be a valid English word..."
  end

  test "Fill in the form with a valid English word and get a congratulations message" do
    visit new_url
    fill_in 'What is the longest word you can find?', with: 'bus'
    click_on 'Play'
    assert test: "Valid word input"
    assert_text "Congratulations! bus is a valid English word!"
  end
end