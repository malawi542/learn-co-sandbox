def greeting
  puts "hi, Ruby programmger!"
end

greeting

def greeting(name)
  puts "Hello, #{name}!"
end

greeting("Muath")

def greeting_programmer(name, language)
  puts "Hello, #{name}. We heard you are a great #{language} programmer."
end

greeting_programmer("David", "Arabic")