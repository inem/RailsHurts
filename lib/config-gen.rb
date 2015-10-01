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

config = YAML.load_file('../data/questions.yml')

infoOpts = ["name", "main", "results", "level1", "level2", "level3", "level4", "level5"]

correctDefault = config["correctAnswerText"]
incorrectDefault = config["incorrectAnswerText"]
descriptionDefault = config["descriptionText"]
id = 0
result = {
  info: config.select{|k, v| infoOpts.include? k },
  questions: config["questions"].map { |question|
    correct = question["correct"] || correctDefault
    incorrect = question["incorrect"] || incorrectDefault
    description = question["description"] || descriptionDefault
    question.delete "correctText"
    question.delete "incorrectText"
    question.delete "descriptionText"
    q = question.to_a[0]
    id += 1
    {
      q: q[0],
      id: id,
      a: optionArray(q[1]),
      correct: correct + description,
      incorrect: incorrect + description
    }
  }
}
File.write('../source/javascripts/slickQuiz/slickQuiz-config.js', "var quizJSON="+result.to_json+";")
