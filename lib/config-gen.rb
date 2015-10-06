require 'yaml'
require 'json'

def optionArray(right)
  [
    {option: "Rails", correct: false},
    {option: "Ruby", correct: false}
  ]
  .map { |opt|
    if opt[:option] == right
      opt[:correct] = true
    end
    opt
  }
end

def opposite(ans)
  ans == "Ruby" ? "Rails" : "Ruby"
end

def p_span(arg)
  "<p><span>#{arg}</span></p>"
end

def pretty(arg)
  "<pre class='prettyprint'>#{arg}</pre>"
end

config = YAML.load_file('../data/questions.yml')

infoOpts = ["name", "main", "results", "level1", "level2", "level3", "level4", "level5"]

correctDefault = config["correctAnswerText"]
incorrectDefault = config["incorrectAnswerText"]
descriptionDefault = config["descriptionText"]
id = 0
result = {
  info: config.select{|k, v| infoOpts.include? k },
  questions: config["questions"].map { |question|
    questionCopy = question.dup
    questionCopy.delete "correctText"
    questionCopy.delete "incorrectText"
    questionCopy.delete "descriptionText"

    q = questionCopy.to_a[0]
    answer = q[1]

    description = question["description"] || descriptionDefault

    correct = question["correct"] || p_span("Yes, this is #{answer}")
    incorrect = question["incorrect"] || p_span("No, this is not #{opposite(answer)}")

    id += 1
    {
      q: pretty(q[0]),
      id: id,
      a: optionArray(answer),
      correct: correct + description,
      incorrect: incorrect + description
    }
  }
}
File.write('../source/javascripts/slickQuiz/slickQuiz-config.js', "var quizJSON="+result.to_json+";")
