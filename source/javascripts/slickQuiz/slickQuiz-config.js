// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "with_options",
            "id": 1,
            "a": [
                {"option": "Rails",      "correct": true},
                {"option": "Ruby",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "reverse_merge",
            "id": 2,
            "a": [
                {"option": "Ruby",               "correct": false},
                {"option": "Rails",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "DateTime.current",
            "id": 3,
            "a": [
                {"option": "Ruby",                  "correct": false},
                {"option": "Rails",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": " Array(foo: :bar)      # => [[:foo, :bar]]",
            "id":  4,
            "a": [
                {"option": "Ruby",     "correct": true},
                {"option": "Rails",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 5
            "q": ".to_json",
            "id":  5,
            "a": [
                {"option": "Ruby",     "correct": true},
                {"option": "Rails",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 6
            "q": "Date.today",
            "id":  6,
            "a": [
                {"option": "Ruby",     "correct": true},
                {"option": "Rails",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 7
            "q": "a.cycle { |x| puts x }     # print, a, b, c, a, b, c,.. forever..",
            "id":  7,
            "a": [
                {"option": "Rails",     "correct": false},
                {"option": "Ruby",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 8
            "q": "Time.now",
            "id":  8,
            "a": [
                {"option": "Ruby",     "correct": true},
                {"option": "Rails",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 9
            "q": ".downcase!",
            "id":  9,
            "a": [
                {"option": "Ruby",     "correct": true},
                {"option": "Rails",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
                { // Question 10
            "q": "class_attribute",
            "id": 10,
            "a": [
                {"option": "Rails",     "correct": true},
                {"option": "Ruby",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 11
            "q": "alias_attribute",
            "id": 11,
            "a": [
                {"option": "Rails",    "correct": true},
                {"option": "Ruby",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
              { // Question 12
            "q": ".duplicable?",
            "id": 12,
            "a": [
                {"option": "Rails",    "correct": true},
                {"option": "Ruby",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
              { // Question 13
            "q": "Array.wrap(nil)     # => [] </br> Array.wrap([1, 2, 3]) # => [1, 2, 3]</br> Array.wrap(0)    # => [0]",
            "id": 13,
            "a": [
                {"option": "Rails",    "correct": true},
                {"option": "Ruby",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
                      { // Question 14
            "q": "'hello'.at(4)  # => 'o'",
            "id": 14,
            "a": [
                {"option": "Rails",    "correct": true},
                {"option": "Ruby",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
